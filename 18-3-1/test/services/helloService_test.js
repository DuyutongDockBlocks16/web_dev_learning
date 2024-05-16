import { assertEquals } from "https://deno.land/std@0.222.1/testing/asserts.ts";
import {getHello, setHello} from "../../services/helloService.js";

Deno.test("Calling 'getHello()' returns 'Oh, hello there!'", async () => {
    assertEquals(getHello(), "Oh, hello there!");
});

Deno.test("newMessage.length === 0 then didn't change the message", async () => {
    setHello("")
    assertEquals(getHello(), "Oh, hello there!");
});

Deno.test("!newMessage then didn't change the message", async () => {
    setHello(null)
    assertEquals(getHello(), "Oh, hello there!");
});

Deno.test("newMessage is undefined, message should not change", () => {
    setHello(undefined); // 传入 undefined
    assertEquals(getHello(), "Oh, hello there!"); // 验证 message 未改变
});

Deno.test("newMessage.length < 10", () => {
    setHello("123456789"); // 传入 undefined
    assertEquals(getHello(), "123456789"); // 验证 message 未改变
});

Deno.test("newMessage.length = 10", () => {
    setHello("1234567890"); // 传入 undefined
    assertEquals(getHello(), "123456789..."); // 验证 message 未改变
});

Deno.test("newMessage.length > 10", () => {
    setHello("1234567890123"); // 传入 undefined
    assertEquals(getHello(), "123456789..."); // 验证 message 未改变
});

Deno.test("set hello and newMessage.length === 0", () => {
    setHello("123456789"); // 传入 undefined
    setHello("")
    assertEquals(getHello(), "123456789"); // 验证 message 未改变
});

Deno.test("set hello and newMessage.length is null", () => {
    setHello("123456789"); // 传入 undefined
    setHello(null)
    assertEquals(getHello(), "123456789"); // 验证 message 未改变
});

Deno.test("newMessage.length < 10 and then newMessage.length > 10", () => {
    setHello(undefined); // 传入 undefined
    setHello("1234567890");
    assertEquals(getHello(), "123456789...");
});

Deno.test("newMessage.length < 10 and then newMessage.length >= 10", () => {
    setHello("123456789");
    setHello("1234567890");
    assertEquals(getHello(), "123456789...");
});

Deno.test("set hello and newMessage.length is null", () => {
    setHello("123456789");
    setHello(null);
    assertEquals(getHello(), "123456789");
});


Deno.test("all paths 123 order", () => {
    setHello(undefined); // 传入 undefined
    setHello("123456789");
    setHello("1234567890");
    assertEquals(getHello(), "123456789...");
});

Deno.test("all paths 321 order", () => {
    setHello("1234567890"); // 传入 undefined
    setHello("123456789");
    setHello(null);
    assertEquals(getHello(), "123456789");
});

Deno.test("all paths 23 order", () => {
    setHello("123456789");
    setHello("1234567890");
    assertEquals(getHello(), "123456789...");
});

Deno.test("newMessage is a string with null character", () => {
    setHello("null");
    assertEquals(getHello(), "null");
});

// Deno.test("newMessage is a boolean", () => {
//     setHello(true);  // 布尔值
//     assertEquals(getHello(), "Oh, hello there!");
// });
//
// //
// Deno.test("newMessage is an object", () => {
//     setHello({});  // 对象
//     assertEquals(getHello(), "Oh, hello there!");
// });
//
// Deno.test("newMessage is a number", () => {
//     setHello(1);  // 数字
//     assertEquals(getHello(), "1");
// });
//
// Deno.test("newMessage is an array", () => {
//     setHello([]);  // 数组
//     assertEquals(getHello(), "Oh, hello there!");
// });
//
// Deno.test("newMessage is an object", () => {
//     setHello({});  // 对象
//     assertEquals(getHello(), "Oh, hello there!");
// });
