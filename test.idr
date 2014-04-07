module Main

import Types

log : String -> IO ()
log s = mkForeign (FFun "console.log(%0)" [FString] FUnit) s

getKeyCode : Event -> IO String
getKeyCode (MkEvent e) = mkForeign (FFun "%0.keyCode" [FPtr] FString) e

getElemById : String -> IO Element
getElemById s = do
  x <- mkForeign (FFun "document.getElementById(%0)" [FString] FPtr) s
  return (MkElem x)

setColor : Element -> String -> IO ()
setColor (MkElem el) color = mkForeign (FFun "%0.style['background-color']=%1" [FPtr, FString] FUnit) el color

bindKeys : (Event -> IO ()) -> IO ()
bindKeys f = mkForeign (FFun "window.onkeydown=%0" [FFunction (FAny Event) (FAny (IO ()))] FUnit) f

blink : Event -> IO ()
blink e = do
  kc <- getKeyCode e
  log kc
  el <- getElemById "target"
  setColor el "red"


main : IO ()
main = do bindKeys blink
