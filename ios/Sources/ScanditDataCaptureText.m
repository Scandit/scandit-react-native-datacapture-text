#import "ScanditDataCaptureText.h"
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE (ScanditDataCaptureText, RCTEventEmitter)
RCT_EXTERN_METHOD(finishDidCaptureTextCallback : (BOOL)enabled)

RCT_EXTERN_METHOD(registerListenerForEvents)

RCT_EXTERN_METHOD(unregisterListenerForEvents)
@end
