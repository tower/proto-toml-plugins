# proto-toml-plugins

TOML plugins for moonrepo/proto

## About

Just a small collection of TOML plugins for the [moonrepo/proto](https://github.com/moonrepo/proto) tool.
See the [Moonrepo Plugins](https://moonrepo.dev/docs/proto/plugins) pages for more information about how to
create your own TOML/WASM plugins.

## Installation Methods

The plugins can be installed via `proto` itself. Assuming you wanted to install the latest available `gojq`:

```
proto add-plugin protoc "source:https://raw.githubusercontent.com/tower/proto-toml-plugins/main/plugins/protoc.toml"
proto install protoc
```

Refer to https://moonrepo.dev/docs/proto/tools#third-party for more information.

## Available plugins in this repo

* `protoc` - Compiler for protocol buffers, Google's data interchange format (https://github.com/protocolbuffers/protobuf)
