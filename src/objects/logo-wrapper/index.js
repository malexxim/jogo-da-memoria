const logoWrapper = (function() {
  const module = {};

  module.render = (...$children) => `    
      <div class="logoWrapper">
         ${$children.join("")}     
      </div>
  `;

  return {
    render: module.render
  };
})();
