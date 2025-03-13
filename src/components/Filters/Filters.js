// src/components/Filters/Filters.js
import React, { useState } from 'react';
import { FilterContainer, FilterHeader, FilterButton, ProductsCount } from './Filters.styles';

// Компонент Filters, который принимает пропсы: sizes (доступные размеры), onFilter (функция для фильтрации), productCount (количество товаров)
const Filters = ({ sizes, onFilter, productCount }) => {
  // Состояние для хранения выбранных размеров
  const [selectedSizes, setSelectedSizes] = useState([]);

  // Функция для обработки клика по кнопке фильтра
  const handleFilterClick = (size) => {
    if (selectedSizes.includes(size)) {
      // Если размер уже выбран, удаляем его из списка выбранных
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
      onFilter(selectedSizes.filter((s) => s !== size)); // Обновляем фильтр
    } else {
      // Если размер не выбран, добавляем его в список выбранных
      setSelectedSizes([...selectedSizes, size]);
      onFilter([...selectedSizes, size]); // Обновляем фильтр
    }
  };

  return (
    <FilterContainer>
      {/* Заголовок для секции фильтров */}
      <FilterHeader>Размер:</FilterHeader>
      {/* Отображение кнопок для каждого доступного размера */}
      {sizes.map((size) => (
        <FilterButton
          key={size} // Уникальный ключ для каждого размера
          onClick={() => handleFilterClick(size)} // Обработчик клика
          isSelected={selectedSizes.includes(size)} // Пропс для стилизации выбранной кнопки
        >
          {size} {/* Отображение размера на кнопке */}
        </FilterButton>
      ))}
      {/* Отображение количества доступных товаров */}
      <ProductsCount>{productCount} Товаров есть в наличии</ProductsCount>
    </FilterContainer>
  );
};

export default Filters;