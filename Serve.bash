#!/bin/bash

pip install -r requirements.txt
cd ./FrontEnd
npm run build
cd ../
python App.py