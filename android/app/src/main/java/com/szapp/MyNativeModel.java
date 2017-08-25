package com.szapp;

import android.app.Activity;
import android.content.Intent;
import android.widget.Toast;

import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * Created by Administrator on 2017/8/25.
 */

public class MyNativeModel extends ReactContextBaseJavaModule {
    private ReactApplicationContext mContext;

    public MyNativeModel(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
    }

    @Override
    public String getName() {
        return "MyNativeModel";
    }

    @ReactMethod
    public void rnCallNative(String msg){
        Toast.makeText(mContext,msg,Toast.LENGTH_SHORT).show();
        sendMsgToRn("后台获取数据并返回该数据"+msg);
    }

    @ReactMethod
    public void startActivityFromJS(String name, String params){
        try{
            Activity currentActivity = getCurrentActivity();
            if(null!=currentActivity){
                Class toActivity = Class.forName(name);
                Intent intent = new Intent(currentActivity,toActivity);
                intent.putExtra("params", params);
                currentActivity.startActivity(intent);
            }
        }catch(Exception e){
            throw new JSApplicationIllegalArgumentException(
                    "不能打开Activity : "+e.getMessage());
        }
    }

    public void sendMsgToRn(String msg){
        //将消息msg发送给RN侧
        mContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("AndroidToRNMessage",msg);

    }

}
