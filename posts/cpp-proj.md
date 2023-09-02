---
title: How To Set Up A C++ Project
subtitle: C++ Project Setup and Tooling For JavaScript Devs
date: 2023-03-18
tags: c++
featured: false
image: https://ik.imagekit.io/jollyjerr/jtabb_dev/alexander-grey-_Y3IuVbPpmU-unsplash_XPnmG1IB3.jpg
draft: false
---

# How To Set Up A C++ Project

> C++ Project Setup and Tooling (For JavaScript Devs)

Diving into the c++ world (from a background in higher level languages and modern languages like rust) I was surprised by how different the development tooling ecosystem is.
I found a few good resources around, but no articles that quickly walked me through getting a project set up with external libraries. Here is the speedy quick start article I wish I would have found:

## Install Dependencies

Make sure you have a c++ compiler installed. If you are on mac, you likely have `gcc` installed already through xcode, but you can also install gcc through homebrew with `brew install gcc`.

You will also want `cmake` installed. You can install it with `brew install cmake`.

## Set Up A CMake Project

[CMake](https://cmake.org/) is an open source tool that helps you build, test, and package software in a variety of languages. In the c++ world it helps us compile, version, and test
our code while also managing proper linking of external libraries. You can build c++ projects without using it, but I found it to be the most straightforward and reliable way to bootstrap a project
with a decent development experience.

1. Make a new directory, `cd` into it, and `git init`

1. Add a `CMakeLists.txt`

```txt
cmake_minimum_required(VERSION 3.26.0)
project(your_project_name)
add_executable(${PROJECT_NAME} src/main.cpp)
```

You may want to set a higher minimum required version. Obtain your current version by running `cmake --version`.

For `your_project_name` put any name you like.

2. Create directories for your source code and build artifacts

I prefer to have my source code in `src` and all build artifacts in `out`, but you can choose anything you like. Just know the rest of this article will be using src and out.

```sh
mkdir src
mkdir out
```

3. Add a `.gitignore`

CMake generates a lot of stuff that we don't care about tracking. Here is an example gitignore

```txt
*.d
*.slo
*.lo
*.o
*.obj
*.gch
*.pch
*.so
*.dylib
*.dll
*.mod
*.smod
*.lai
*.la
*.a
*.lib
*.exe
*.out
*.app
CMakeLists.txt.user
CMakeCache.txt
CMakeFiles
CMakeScripts
Testing
cmake_install.cmake
install_manifest.txt
compile_commands.json
CTestTestfile.cmake
_deps
out/build
.cache
```

4. Add a `Makefile`

You can use a `Makefile` in your project root to hold commonly used commands, similar to the `scripts` field in package.json of a node project.

```Makefile
configure:
	cmake -S . -B out/build -D CMAKE_EXPORT_COMPILE_COMMANDS=true
	# symlink meta for clangd https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md#clangd
    # you don't need this line if you use vscode
	ln -sf ./out/build/compile_commands.json .

build:
	cd out/build && make

run:
	cd out/build && ./your_project_name
```

You can see in the `configure` command we are calling `cmake` and telling it to read the source defined in our root `CMakeLists.txt` and output the build configuration in `out/build`.

Then we can call `make build` to use CMake's generated makefile to actually compile our c++ project.

`make run` will then run the compiled executable, but be sure to replace `your_project_name` with your project name.

## Compile Your Source Code

To check if everything is working, I recommend adding a hello world program in `src/main.cpp`

```cpp
#include <iostream>

int main() {
    std::cout << "Hello World!";
    return 0;
}
```

Then run `make configure && make build && make run`

Your hello world program should run, and you should see a fully configured CMake project in `out/build`.

If everything is working, I would recommend a `git commit -am "init project"`.

## Add External Libraries

If you want to use any external libraries, you need to download them from GitHub as git submodules. There is no standardized `yarn add`, `go get`, or `cargo add` in the c++ ecosystem, and
most projects use git submodules in a `libs` or `externals` directory to achieve the same thing.

```sh
mkdir libs
git submodule add https://github.com/glfw/glfw.git libs/glfw
```

Now you can use CMake to handle linking and building your external library. I'm using [glfw](https://www.glfw.org/) as an example here.

```txt
# Add this to CMakeLists.txt

add_subdirectory(libs/glfw)
target_include_directories(${PROJECT_NAME} PUBLIC libs/glfw/include)
target_link_directories(${PROJECT_NAME} PRIVATE libs/glfw/src)
target_link_libraries(${PROJECT_NAME} glfw)
```

If the library you are using does not support cmake you may need to follow project specific instructions to build the library from source as a static library (compiled into your project) or
a [dll](https://stackoverflow.com/questions/140061/when-to-use-dynamic-vs-static-libraries).

## Have fun!

You should now be able to update `src/main.cpp` to use external libraries. Here is an example:

```cpp
#include <GLFW/glfw3.h>
#include <cstdio>
#include <cstdlib>

int main(void) {
  GLFWwindow *window;

  if (!glfwInit()) {
    fprintf(stderr, "Failed to start glfw\n");
    exit(EXIT_FAILURE);
  }

  window = glfwCreateWindow(600, 600, "example", NULL, NULL);
  if (!window) {
    glfwTerminate();
    exit(EXIT_FAILURE);
  }

  while (!glfwWindowShouldClose(window)) {
    glfwSwapBuffers(window);
    glfwPollEvents();
  }

  glfwTerminate();

  return EXIT_SUCCESS;
}
```

Now just use the tools you have in place to run it!

```sh
make configure && make build && make run
```

That is all for now! I'll circle back and add test runner setup soon. Until next time!
