import { TelegraphSystem } from "../core/TelegraphSystem";
import { ManualEmitter } from "../emitters/ManualEmitter";
import { EmitterNode } from "../emitters/EmitterNode";
import { MorseEncoder } from "../encoding/MorseEncoder";
import { BinaryEncoder } from "../encoding/BinaryEncoder";
import { LandCable } from "../channels/LandCable";
import { SubmarineCable } from "../channels/SubmarineCable";
import { SimpleRelay } from "../relays/SimpleRelay";
import { BatteryRelay } from "../relays/BatteryRelay";
import { ConsoleReceiver } from "../receivers/ConsoleReceiver";

// Codificador y decodificasor
const morseCoder = new MorseEncoder(); // Codificador a Morse
const binaryCoder = new BinaryEncoder(); // Codificador a Binario
const coder = [morseCoder, morseCoder];

// Emisor
const manualEmitter = new ManualEmitter(coder[0]);
manualEmitter.powerOn();
const emitter = new EmitterNode(manualEmitter);

// Canales
const landCable = new LandCable(20); // Cable terrestre
const submarineCable = new SubmarineCable(15); // Cable subterraneo (mayor resistencia que cable terrestre)

// Relés
const simpleRelay = new SimpleRelay(); // Relé simple
const batteryRelay = new BatteryRelay(1); // Relé con batería

// Receptor
const receiver = new ConsoleReceiver(coder[1]);

// Se pueden modificar los nodos y utilizar otros canales o relés
const nodes = [emitter, landCable, simpleRelay, landCable, receiver];
const system = new TelegraphSystem(nodes);

const message = "SOS";
console.log(`\nEntrada: ${message}`);
console.log(`\nCodificador: ${coder[0].name}`);
console.log(`\nDecodificador: ${coder[1].name}`);
const code = manualEmitter.codeMessage(message);
const result = manualEmitter.sendPulses(code);

// Comprueba fallo del emisor
if (!result.success) {
  console.error(result.error.toString());
} else {
  const transmitResult = system.transmit(result.signal);

  // Comprueba fallo del proceso
  if (transmitResult.success) {
    receiver.output(transmitResult.signal);
  } else {
    console.error(transmitResult.error.toString());
  }
}