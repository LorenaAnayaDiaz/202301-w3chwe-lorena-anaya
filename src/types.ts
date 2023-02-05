interface ComponentStructure {
  domElement: HTMLElement;
  render: () => void;
  addListeners?: () => void;
}

export default ComponentStructure;

export interface Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  sprites: {
    versions: {
      'generation-v': {
        'black-white': {
          animated: {
            front_default: string;
          };
        };
      };
    };
  };
}
