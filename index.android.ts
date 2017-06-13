declare const android:any;

export const exit: Function = function () {
    android.os.Process.killProcess(android.os.Process.myPid());
}