import Foundation

@objc public class Vibrate: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
