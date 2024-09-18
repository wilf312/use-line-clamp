
# @genya/use-line-clamp

A React hook to toggle the visibility of components.

## Installation

You can install the package via npm:

```bash
npm install @genya/use-line-clamp
```

or via yarn:

```bash
yarn add @genya/use-line-clamp
```

## Usage

### Basic Usage

Here's an example of how to use the `useToggleVisibility` hook in your React component:

```tsx
import React from 'react';
import { useToggleVisibility } from '@genya/use-line-clamp';

const MyComponent = (props: { message: string }) => {
  return <div>{props.message}</div>;
};

const App = () => {
  const [ToggledComponent, toggleVisibility, isVisible] = useToggleVisibility(MyComponent, false);

  return (
    <div>
      <button onClick={(e) => toggleVisibility(e)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      <ToggledComponent message="Hello, World!" />
    </div>
  );
};

export default App;
```

### API

#### `useToggleVisibility`

```typescript
const [Component, toggleVisibility, isVisible] = useToggleVisibility(WrappedComponent, initialVisibility);
```

##### Parameters

- `WrappedComponent`: The component to be toggled.
- `initialVisibility` (optional): The initial visibility state of the component. Defaults to `false`.

##### Returns

- `Component`: The wrapped component that will be conditionally rendered.
- `toggleVisibility`: A function to toggle the visibility of the component. It can be called with an optional event and an optional boolean to explicitly set the visibility state.
- `isVisible`: The current visibility state of the component.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request.

### License

This project is licensed under the MIT License.
