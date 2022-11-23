class ResizeObserverStub {
  observe() {
    // do nothing
  }
  unobserve() {
    // do nothing
  }
  disconnect() {
    // do nothing
  }
}
  
window.ResizeObserver = window.ResizeObserver || ResizeObserverStub;
