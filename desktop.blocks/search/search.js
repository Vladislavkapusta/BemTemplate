modules.define('search', ['i-bem-dom'], function(provide, bemDom, Input, Button) {
    provide(bemDom.declBlock('search', {
        onSetMod: {
            js: {
                inited: function() {
                    this._input = this.findChildBlock(Input);
                }
            }
        },
        _onSubmit: function(e) {
            e.preventDefault();
            alert('Вы ищете: ' + this._input.getVal() + '!');
        }
    }, {
        lazyInit: true,
        onInit: function() {
            this._domEvents().on('submit', this.prototype._onSubmit);
        }
    }));
});