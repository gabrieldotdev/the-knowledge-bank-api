#!/bin/sh

# Change directory to the project root
cd "$(dirname "$0")"

# Install dependencies
pnpm install

# Start the server
pnpm start