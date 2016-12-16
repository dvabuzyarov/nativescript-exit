declare const android:any;

export default function (): void{
    android.os.Process.killProcess(android.os.Process.myPid());
}