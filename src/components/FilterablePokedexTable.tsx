import React from 'react';

interface PokemonTypeSelectionProps {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
  availableTypes: string[];
}

const FilterablePokedexTable: React.FC<PokemonTypeSelectionProps> = ({
  selectedType,
  selectType,
  availableTypes
}) => {
  return (
    <div className='bg-transparent'>
      <select
        value={selectedType || ''}
        onChange={(e) => selectType(e.target.value || undefined)}
      >
        <option value="">None</option>
        {availableTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterablePokedexTable;
