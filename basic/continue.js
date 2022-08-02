/**
 * 持续点击 continue，观察代码执行顺序
 */
// global scope
// statement 1
const name = "jack";

// statement 2
const showName = () => {
    // inner scope
    // function statement 1
    console.log(name);
    // random statement
    console.log("----");
    console.log("----");
    console.log("----");
};

// statement 3
showName();
