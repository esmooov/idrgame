module Types

data Element : Type where
      MkElem : Ptr -> Element

data Event : Type where
    MkEvent : Ptr -> Event
