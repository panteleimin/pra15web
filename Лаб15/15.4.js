function cssToCamelCase(cssProperty) {
  return cssProperty.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

console.log(cssToCamelCase("font-size"));    
console.log(cssToCamelCase("background-color"));
console.log(cssToCamelCase("text-align"));