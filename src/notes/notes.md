
```js
  /**
    * Returns an element with namespace namespace. Its namespace prefix will be everything before ":" (U+003E) in qualifiedName or null. Its local name will be everything after ":" (U+003E) in qualifiedName or qualifiedName.
    *
    * If localName does not match the Name production an "InvalidCharacterError" DOMException will be thrown.
    *
    * If one of the following conditions is true a "NamespaceError" DOMException will be thrown:
    *
    * localName does not match the QName production.
    * Namespace prefix is not null and namespace is the empty string.
    * Namespace prefix is "xml" and namespace is not the XML namespace.
    * qualifiedName or namespace prefix is "xmlns" and namespace is not the XMLNS namespace.
    * namespace is the XMLNS namespace and neither qualifiedName nor namespace prefix is "xmlns".
    *
    * When supplied, options's is can be used to create a customized built-in element.
    */
  createElementNS(namespaceURI: "http://www.w3.org/1999/xhtml", qualifiedName: string): HTMLElement;
  createElementNS<K extends keyof SVGElementTagNameMap>(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: K): SVGElementTagNameMap[K];
  createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: string): SVGElement;
  createElementNS(namespaceURI: string | null, qualifiedName: string, options?: ElementCreationOptions): Element;
  createElementNS(namespace: string | null, qualifiedName: string, options?: string | ElementCreationOptions): Element;

```

---
## Resources for canvas and a namespaced element resource

- LINKS
  * <a rel="noopener noreferrer" href="https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/glossary.html#dt-namespaceURI">
  namespaceURI
  </a>

  * <a rel="noopener noreferrer" href="https://www.w3schools.com/html/html5_canvas.asp">
  canvas element
  </a>

  * <a rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas">
  MDN: canvas element
  </a>
  
  * <a rel="noopener noreferrer" href="https://www.khronos.org/registry/webgl/sdk/tests/CONFORMANCE_RULES.txt">
  WEBGL STANDARD CONFORMANCE RULES
  </a>


## Resources for camera aspect changing

  * <a rel="noopener noreferrer" href="https://threejsfundamentals.org/threejs/lessons/threejs-responsive.html">
  resize camera aspect with window resize event
  </a>



## HOW TO PUT TEXTURES ON CUBE THREE JS

  * <a rel="noopener noreferrer" href="https://discourse.threejs.org/t/how-to-add-a-png-texture-to-a-cube/15040">
  TEXTURES THREEJS
  </a>
* 

