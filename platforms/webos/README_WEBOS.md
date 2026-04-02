NBCraft webOS TV Port (MVP)

Build steps:

1 Install Emscripten
2 Build emscripten target
3 Copy output js/wasm here
4 Install webOS CLI
5 Run:
ares-package .
ares-install *.ipk
ares-launch com.nbcraft.game
