# Proyecto de práctica de Solidity

Es proyecto es una ejercio de práctica. Sirve para ver como desarrollar smartcontract con Solidity y testear el comportamiento de mismo con HardHat.

Dentro de la carpeta scripts van a ver dos archivos, uno llamado *run.js* y el otro llamado *desploy.js*. 
- run.js: Se utiliza para testear el contrato.
- deploy.js: Se utiliza para desplegar el contrato

## Instalación

- Clonar este repositorio en tu directorio: 
```bash
git clone https://github.com/JoseMRodriguezM/Smart-Contract-Practice.git
```
- Luego, para testear el contrato en la propia red de HardHat, debemos colocar el sig. código:
```bash
npx hardhat run scripts/run.js
```
- Para crear un nodo en la red local: 
```bash
npx hardhat node
```
- Una vez que el nodo haya sido creado, y queremos desplegarlo en la blockchain debemos escribir: 
```bash
npx hardhat run scripts/deploy.js 
```
