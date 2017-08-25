package com.szapp;

import com.facebook.react.ReactActivity;

/**
 * Created by Administrator on 2017/8/25.
 */

public class MyReactActivity extends ReactActivity {


    @Override
    protected String getMainComponentName() {
        return "szapp";
    }
    /*private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;
//    private LinearLayout ll;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.myreactactivity);

//        mReactRootView = new ReactRootView(this);
        mReactRootView = (ReactRootView)findViewById(R.id.rnview);
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                //.setUseOldBridge(true) // uncomment this line if your app crashes
                .build();
        mReactRootView.startReactApplication(mReactInstanceManager, "szapp", null);

//        initView();
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }

    @Override
    protected void onPause() {
        super.onPause();

        if (mReactInstanceManager != null) {
//            mReactInstanceManager.onPause();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();

        if (mReactInstanceManager != null) {
//            mReactInstanceManager.onResume(this, this);
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        if (mReactInstanceManager != null) {
//            mReactInstanceManager.onDestroy();
        }
    }

    //    We also need to pass back button events to React Native:
    @Override
    public void onBackPressed() {
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onBackPressed();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {
            mReactInstanceManager.showDevOptionsDialog();
            return true;
        }
        return super.onKeyUp(keyCode, event);
    }

    private void initView() {
//        ll = (LinearLayout) findViewById(R.id.ll);
//        ll.addView(mReactRootView);
    }*/
}