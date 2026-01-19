# Simulación de Telégrafo Eléctrico

Este proyecto implementa una simulación de un sistema de telégrafo eléctrico aplicando **programación orientada a objetos**, con foco en **diseño, desacoplamiento y extensibilidad**.

Está desarrollado en **TypeScript** y se ejecuta sobre **Node.js**.

---

## Descripción

El sistema simula la transmisión de mensajes a través de distintos componentes:

* **Emisores**: generan la señal a partir de un mensaje.
* **Canales**: transportan la señal y aplican pérdida según la distancia.
* **Relés**: regeneran la señal cuando es débil.
* **Receptores**: validan, decodifican y muestran el mensaje.
* **Sistema coordinador**: orquesta la transmisión completa sin depender de implementaciones concretas.
* **Codificación**: se utiliza un sistema de codificación que se encarga de **transformar el texto en señales y decodificar las señales al mensaje original**. El diseño permite sustituir el codificador por otros sistemas de codificación (**Morse** o **Binario**).

---

## Tecnologías

* **TypeScript**
* **Node.js**
* **ts-node**

---

## Ejecución

Instalar dependencias:

```bash
npm install
```

Ejecutar la simulación:

```bash
npx ts-node src/main/index.ts
```

---

## Ejemplo de salida

### Entrada

```
Entrada: SOS
```

### Codificador

```
Codificador: Morse
```

### Decodificador

```
Decodificador: Morse
```

### Transmisión correcta

```
Proceso: Emisor manual -> Cable terrestre -> Relé simple -> Cable terrestre -> Receptor
Mensaje recibido correctamente: SOS
```

### Transmisión con fallo

```
ERROR: señal degradada irreversiblemente en Canal km 45
```

---

## Autor

Pau Torrelles Valles
