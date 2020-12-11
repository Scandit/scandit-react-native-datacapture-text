#import "ScanditDataCaptureText.h"
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE (ScanditDataCaptureText, RCTEventEmitter)
RCT_EXTERN_METHOD(finishDidCaptureTextCallback : (BOOL)enabled)
@end
