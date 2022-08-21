What is the main functionality of the browser?
A browser is software on your computer which you use to 'surf' the internet and visit webpages. The clinet (browser) will send request (HTTP) to server (host) and server will send response (DOM) which browser will render and display on screen.

High Level Components of a browser?
The user interface: this includes the address bar, back/forward button, bookmarking menu, refresh/stop button and home button.
The browser engine: marshals actions between the UI and the rendering engine.
The rendering engine: responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
Networking: for network calls such as HTTP requests.
UI backend: used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.
JavaScript interpreter: Used to parse and execute JavaScript code.
Data storage: This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

Rendering engine and its use?
The rendering engine is reponsible for displaying the contents of the requested document/web pages.
Baisc flow is, parse HTML to construct the DOM tree -> Render tree construction -> Layout of the render tree -> Painting the render tree

Parsers (HTML, CSS, etc)?
Parsing a document means translating it to a structure the code can use. The result of parsing is usually a tree of nodes that represent the structure of the document. This is called a parse tree or a syntax tree.

Script Processors?
The script processor executes Javascript code to process an event.

Tree construction?
Render-Tree is also a tree-like structure constructed by combining DOM and CSSOM trees together. The browser has to calculate the layout of each visible element and paint them on the screen, for that browser uses this Render-Tree.
DOM tree - When the browser reads HTML code, whenever it encounters an HTML element like html, body, div etc., it creates a JavaScript object called a Node. After the browser has created Nodes from the HTML document, it has to create a tree-like structure of these node objects.
CSS Object Model (CSSOM) tree - After constructing the DOM, the browser reads CSS from all the sources (external, embedded, inline, user-agent, etc.) and construct a CSSOM tree. Each node in this tree contains CSS style information that will be applied to DOM elements that it target (specified by the selector).

Order of script processing?
JavaScript is interpreted, compiled, parsed and executed.

Layout and Painting?
Layout - The first browser creates the layout of each individual Render-Tree node. The layout consists of the size of each node in pixels and where (position) it will be printed on the screen. This process is called layout since the browser is calculating the layout information of each node.
Painting - First browser creates different layers for painting and this phase is called Paint operation and once layers are created browser passes these layers to GPU to finally draw it on the screen and this phase is called Compositing operation.
Basic flow - DOM construction -> CSSOM construction -> Render tree construction -> Layout operation -> Paint operation -> Compositing operation.