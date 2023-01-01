# Go

In Go, a name is exported if it begins with a capital letter. For example, Pizza is an exported name, as is Pi, which is exported from the math package.

pizza and pi do not start with a capital letter, so they are not exported.

Inside a function, the := short assignment statement can be used in place of a var declaration with implicit type.

Outside a function, every statement begins with a keyword (var, func, and so on) and so the := construct is not available.

Go's basic types are

bool

string

int int8 int16 int32 int64

uint uint8 uint16 uint32 uint64 uintptr

byte // alias for uint8

rune // alias for int32

// represents a Unicode code point

float32 float64

complex64 complex128

The example shows variables of several types, and also that variable declarations may be "factored" into blocks, as with import statements.

The int, uint, and uintptr types are usually 32 bits wide on 32-bit systems and 64 bits wide on 64-bit systems. When you need an integer value you should use int unless you have a specific reason to use a sized or unsigned integer type.

func main() {

sum := 1

for ; sum < 1000; { // cool unique for loop

sum += sum

}

fmt.Println(sum)

}

A defer statement defers the execution of a function until the surrounding function returns.

The deferred call's arguments are evaluated immediately, but the function call is not executed until the surrounding function returns.

```go

package main



import "fmt"



func main() {

 defer fmt.Println("world")



 fmt.Println("hello")

}



```

Go has pointers. A pointer holds the memory address of a value.

The type \*T is a pointer to a T value. Its zero value is nil.

var p \*int

The & operator generates a pointer to its operand.

i := 42

p = &i

The \* operator denotes the pointer's underlying value.

fmt.Println(\*p) // read i through the pointer p

- p = 21 // set i through the pointer p

This is known as "dereferencing" or "indirecting".

Unlike C, Go has no pointer arithmetic.

```go

type Vertex struct {

 X int

 Y int

}



func main() {

 v := Vertex{1, 2}

 v.X = 4

 fmt.Println(v.X)

}



type Vertex struct {

 X, Y int

}



var (

 v1 = Vertex{1, 2} // has type Vertex

 v2 = Vertex{X: 1} // Y:0 is implicit

 v3 = Vertex{} // X:0 and Y:0

 p = &Vertex{1, 2} // has type *Vertex

)



func main() {

 fmt.Println(v1, p, v2, v3)

}



```

```go

func main() {

 a := make([]int, 5)

 printSlice("a", a)



 b := make([]int, 0, 5)

 printSlice("b", b)



 c := b[:2]

 printSlice("c", c)



 d := c[2:5]

 printSlice("d", d)

}



func printSlice(s string, x []int) {

 fmt.Printf("%s len=%d cap=%d %v\n",

 s, len(x), cap(x), x)

}



var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}



func main() {

 for i, v := range pow {

 fmt.Printf("2**%d = %d\n", i, v)

 }

}



```

A field declaration may be followed by an optional string literal tag, which becomes an attribute for all the fields in the corresponding field declaration. An empty tag string is equivalent to an absent tag. The tags are made visible through a reflection interface and take part in type identity for structs but are otherwise ignored.

```go

struct {

x, y float64 "" // an empty tag string is like an absent tag

name string "any string is permitted as a tag"

_ [4]byte "ceci n'est pas un champ de structure"

}



// A struct corresponding to a TimeStamp protocol buffer.

// The tag strings define the protocol buffer field numbers;

// they follow the convention outlined by the reflect package.

struct {

microsec uint64 `protobuf:"1"`

serverIP6 uint64 `protobuf:"2"`

}

```

A map maps keys to values.

The zero value of a map is nil. A nil map has no keys, nor can keys be added.

The make function returns a map of the given type, initialized and ready for use.

```go

var m = map[string]Vertex{

 "Bell Labs": {40.68433, -74.39967},

 "Google": {37.42202, -122.08408},

}



```

Go does not have classes. However, you can define methods on types.

A method is a function with a special _receiver_ argument.

The receiver appears in its own argument list between the func keyword and the method name.

In this example, the Abs method has a receiver of type Vertex named v.

```go

type Vertex struct {

 X, Y float64

}



func (v Vertex) Abs() float64 {

 return math.Sqrt(v.X*v.X + v.Y*v.Y)

}



func main() {

 v := Vertex{3, 4}

 fmt.Println(v.Abs())

}



type MyFloat float64



func (f MyFloat) Abs() float64 {

 if f < 0 {

 return float64(-f)

 }

 return float64(f)

}



func main() {

 f := MyFloat(-math.Sqrt2)

 fmt.Println(f.Abs())

}



```

The io package specifies the io.Reader interface, which represents the read end of a stream of data.

The Go standard library contains [many implementations](https://golang.org/search?q=Read#Global) of these interfaces, including files, network connections, compressors, ciphers, and others.

The io.Reader interface has a Read method:

func (T) Read(b []byte) (n int, err error)

Read populates the given byte slice with data and returns the number of bytes populated and an error value. It returns an io.EOF error when the stream ends.

The example code creates a [strings.Reader](https://golang.org/pkg/strings/#Reader) and consumes its output 8 bytes at a time.

A _goroutine_ is a lightweight thread managed by the Go runtime.

go f(x, y, z)

starts a new goroutine running

f(x, y, z)

The evaluation of f, x, y, and z happens in the current goroutine and the execution of f happens in the new goroutine.

Goroutines run in the same address space, so access to shared memory must be synchronized. The [sync](https://golang.org/pkg/sync/) package provides useful primitives, although you won't need them much in Go as there are other primitives. (See the next slide.)

Channels are a typed conduit through which you can send and receive values with the channel operator, <-.

ch <- v // Send v to channel ch.

v := <-ch // Receive from ch, and

// assign value to v.

(The data flows in the direction of the arrow.)

Like maps and slices, channels must be created before use:

ch := make(chan int)

By default, sends and receives block until the other side is ready. This allows goroutines to synchronize without explicit locks or condition variables.

The example code sums the numbers in a slice, distributing the work between two goroutines. Once both goroutines have completed their computation, it calculates the final result.

```go

package main



import "fmt"



func sum(s []int, c chan int) {

 sum := 0

 for _, v := range s {

 sum += v

 }

 c <- sum // send sum to c

}



func main() {

 s := []int{7, 2, 8, -9, 4, 0}



 c := make(chan int)

 go sum(s[:len(s)/2], c)

 go sum(s[len(s)/2:], c)

 x, y := <-c, <-c // receive from c



 fmt.Println(x, y, x+y)

}



```
