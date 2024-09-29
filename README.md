![Vercel](https://vercelbadge.vercel.app/api/juanrpz/tic-tac-toe-reloaded)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/70ad5907fc454c6faff33cf5f3938ec0)](https://app.codacy.com?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

# TIC TAC TOE RELOADED

Revisión del popular juego conocido como "Tres en Raya" (Tic tac toe en inglés), en la que a partir de que el jugador coloca 3 fichas en el tablero, en cada turno se elimina del tablero la ficha que más tiempo lleve colocada.

## Descripción del proyecto

Aplicación web desarrollada utilizando HTML, CSS y Javascript utilizando el framework React que implementa una versión del juago conocido como *Tres en Raya*, o *Tic Tac Toe*, con un pequeño giro que pretende conseguir partidas más largas y entretenidas. Como ocurre en el juego normal, cada jugador colocará una ficha en el tablero en el turno que le corresponda, pero en esta nueva versión después de que un jugador coloque 3 fichas en cada turno se eliminará la ficha que más tiempo lleve colocada en el tablero, dejando su espacio libre para que un jugador pueda colocar una ficha en próximos turnos.
La aplicación cuenta con partidas contra la IA o entre jugadores.

## Despliegue

La aplicación se encuentra desplegada en el siguiente [ENLACE](https://tic-tac-toe-reloaded.vercel.app/)

## Reglas del juego
- Al comienzo de cada partida empieza el jugador con el turno **X**
- Cada jugador colocará una ficha en su turno en uno de los espacios libres en el tablero
- Después de que un jugador coloque 3 fichas en el tablero, la ficha del jugador que más tiempo lleve colocada se eliminará del tablero una vez coloque una nueva ficha en su turno
- Sólo se pueden colocar fichas en espacios vacíos del tablero
- La ficha que se elimina después del turno de un jugador no deja el espacio libre hasta que el jugador ha terminado su turno colocando otra ficha
- Gana el jugador que consiga alinear 3 fichas de su mismo turno

## Modos de juego disponibles

Actualmente se encuentran los siguientes modos de juego disponibles:
- [x] Jugador vs IA
- [x] Jugador contra Jugador en local
- [ ] Jugador contra Jugador en línea

## Detalles del desarrollo

La aplicación se está desarrollando utilizando Javascript, con el framework de frontend **React**.
Se han implementado diferentes componentes y custom hooks en función de las necesidades del proyecto, tratando de maximizar su reutilización en la aplicación.
