#import "ScanditDataCaptureText.h"
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE (ScanditDataCaptureText, RCTEventEmitter)
RCT_EXTERN_METHOD(finishDidCaptureTextCallback : (BOOL)enabled)

RCT_EXTERN_METHOD(registerListenerForEvents)

RCT_EXTERN_METHOD(unregisterListenerForEvents)

RCT_EXTERN_METHOD(setModeEnabledState : (BOOL)enabled)

RCT_EXTERN_METHOD(updateTextCaptureOverlay
                  : (NSString *)overlayJson resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(updateTextCaptureMode
                  : (NSString *)modeJson resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(applyTextCaptureModeSettings
                  : (NSString *)modeSettingsJson resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject)

@end
