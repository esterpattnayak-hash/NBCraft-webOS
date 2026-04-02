#!/bin/bash
echo Building NBCraft webOS package
emcmake cmake ../..
emmake make
echo Copy js/wasm/data here then:
ares-package .
