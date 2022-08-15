/**
 * 持续点击 continue，观察代码执行顺序
 */
// global scope
// statement 1
const name = "jack"; /*Set breakpoint*/ /*▶️ Continue*/

// statement 2
const showName /*Set breakpoint*/ = () => {
    // inner scope
    // function statement 1
    console.log(name); /*→ Step over*/
    // random statement
    console.log("----");
    console.log("----"); /*↑ Step out*/
    console.log("----");
};

// statement 3
showName(); /*↓ Step into*/
