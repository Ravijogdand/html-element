const window = require('./')
global.Document = window.Document
global.Node     = window.Node
global.Element  = window.Element
global.Comment  = window.Comment
global.Text     = window.Text
global.document = new window.Document()
