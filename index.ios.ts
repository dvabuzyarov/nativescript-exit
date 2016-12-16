declare const exit: (code: number)=>void;

const _exit: Function = ()=>{
    exit(0);
};

export {_exit as exit};