#!/bin/bash

# Check if no arguments were supplied
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 0 #terminate
fi

# Display only the first three arguments (if more than 3 are given, only the first 3 are shown)
echo "$1"
[ $# -ge 2 ] && echo "$2"
[ $# -ge 3 ] && echo "$3"

