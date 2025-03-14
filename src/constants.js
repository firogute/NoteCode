export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.0",
  python: "3.10.0",
  java: "20.0.0",
  cpp: "17.0.0",
  csharp: "12.0.0",
  php: "8.2.0",
  html: "5.0.0",
  css: "3.0.0",
  ruby: "3.2.0",
  go: "1.20.0",
  rust: "1.70.0",
  kotlin: "1.9.0",
  swift: "5.8.0",
};

export const DEFAULT_CODE_SNIPPETS = {
  javascript: `function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("World"));`,

  typescript: `function greet(name: string): string {
  return "Hello, " + name + "!";
}

console.log(greet("World"));`,

  python: `def greet(name):
    """Greets a person by name."""
    return f"Hello, {name}!"

print(greet("World"))`,

  java: `public class Main {
    public static void main(String[] args) {
        System.out.println(greet("World"));
    }

    public static String greet(String name) {
        return "Hello, " + name + "!";
    }
}`,

  cpp: `#include <iostream>
#include <string>

std::string greet(std::string name) {
    return "Hello, " + name + "!";
}

int main() {
    std::cout << greet("World") << std::endl;
    return 0;
}`,

  csharp: `using System;

class Program {
    static void Main() {
        Console.WriteLine(Greet("World"));
    }

    static string Greet(string name) {
        return "Hello, " + name + "!";
    }
}`,

  php: `<?php
function greet($name) {
    return "Hello, " . $name . "!";
}

echo greet("World");
?>`,

  html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>Copy and paste here the code you want to share.</p>
</body>
</html>`,

  css: `body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    text-align: center;
    padding: 50px;
}

h1 {
    color: #333;
}`,

  ruby: `def greet(name)
  "Hello, #{name}!"
end

puts greet("World")`,

  go: `package main

import "fmt"

func greet(name string) string {
    return "Hello, " + name + "!"
}

func main() {
    fmt.Println(greet("World"))
}`,

  rust: `fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

fn main() {
    println!("{}", greet("World"));
}`,

  kotlin: `fun greet(name: String): String {
    return "Hello, $name!"
}

fun main() {
    println(greet("World"))
}`,

  swift: `func greet(name: String) -> String {
    return "Hello, \\(name)!"
}

print(greet(name: "World"))`,

  bash: `#!/bin/bash

name="World"
echo "Hello, $name!"`,

  sql: `CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

INSERT INTO users (name) VALUES ('World');

SELECT * FROM users;`,

  json: `{
  "message": "Hello, World!",
  "author": "Your Name",
  "timestamp": "2023-10-01T12:00:00Z"
}`,

  yaml: `# YAML: Basic Configuration
message: Hello, World!
author: Your Name
timestamp: 2023-10-01T12:00:00Z`,

  markdown: `# Hello, World!

This is a **Markdown** file.

- Item 1
- Item 2
- Item 3

[Visit Google](https://www.google.com)`,
};
