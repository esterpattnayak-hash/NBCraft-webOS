#!/bin/bash
echo NBCraft webOS full build
emcmake cmake ..
emmake make
echo Copy outputs to platforms/webos then package:
ares-package platforms/webos
