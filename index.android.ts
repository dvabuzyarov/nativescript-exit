declare const android:any;

export const exit: Function = ()=>{
    android.os.Process.killProcess(android.os.Process.myPid());
}