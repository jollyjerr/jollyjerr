# Linux

Handy tips:

ctrl r -> bash history search

chmod -> the permission changing linux command
chown -> changes ownership
3 levels: a - all g - group o - owner

users are in groups. use `id` to see what groups you are in

File permissions are set by three octet bites

```
ll {file} => permission octet

r read
w write
x execute

user|group|all
-rw-rw-r—

chmod 777 {file} -R(for recursive things) = -rwxrwxrwx permissions chmod a+x {file} all peeps execution and write
```

use `top` to peek at system resources and activity
