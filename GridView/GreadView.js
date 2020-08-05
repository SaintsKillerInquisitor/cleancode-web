class GridView {
  /**
  * properties
  * @param[arry] _tableClass - класы оформления
  * @param[array] data - выходные данные
  * @param[array] _atribute - управлем что выводим
  * @param[array] _element - куда выводить
  * @param[array] _header - заголовки таблицы
  * @param[array] _headerClass - сss классы заголовка
 */
}
constuctor (){
  this._header ='';
  this._headerClass = [];
  this._tableClass = [];
  this._element = [];
  this.attribute = [];
}

 /**
 * Method set header
 */
set header(header) {
  if (typeof header === 'string' && header.trin() !='') {
    this._header = header.trim();
    return = true;
  }
    return false;
}


 /**
 *Method set headerClass
 */

 set headerClass(headerClass) {
   if (typeof headerClass === 'object') {
     this._headerClass = headerClass;
     return = true;
   }
     return false;
 }


  /**
  *Method set element
  */

  set element(elemt) {
    if(document.querySelector(element)){
      this._element = document.querySelector(element);
      return = true;
    }
    return = false;
  }
  /**
 * method for show GridViewTable
 *
 */
render() {

}
