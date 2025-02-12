#!/bin/bash

# Check if no arguments were supplied
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 0
fi

# Loop through the arguments and create directories prefixed with "ex"
for arg in "$@"; do
    mkdir -p "ex$arg"
done
