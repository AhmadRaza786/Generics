Array.prototype.generics_sort = function (dataType , order = "asc" , object_props) {
  if(this.length > 1){
    let list = [];
      switch(dataType){
        case "string" : {
          list = order === "asc" ? stringSort(this, true, object_props) :
            order === "desc" ? stringSort(this, false, object_props) : this;
          break;
        }
        case "number" : {
          list = order === "asc" ? numberSort(this, true, object_props) :
            order === "desc" ? numberSort(this, false, object_props) : this;
          break;
        }
        case "date" : {
          list = order === "asc" ? dateSort(this, true, object_props) :
            order === "desc" ? dateSort(this, false, object_props) : this;
          break;
        }
        default : {
          list = this;
          break;
        }
      }
      return list;
  }
  return this;
};


function numberSort (list , asc_order , object_props) {
  for(let i = 0 ; i < list.length ; i++ ){
    for(let j = i ; j < list.length ; j++){
      let temp = null;
      if(selectObjectProp(list[j], object_props) < selectObjectProp(list[i], object_props)){
        temp = list[j];
        list[j] = list[i];
        list[i] = temp;
      }
    }
  }
  return !asc_order ? list.reverse() : list ;
}

function stringSort (list , asc_order, object_props) {
  for(let i = 0 ; i < list.length ; i++ ){
    for(let j = i ; j < list.length ; j++){
      let temp = null;
      if(selectObjectProp(list[i], object_props).localeCompare(selectObjectProp(list[j], object_props)) === 1 ){
        temp = list[j];
        list[j] = list[i];
        list[i] = temp;
      }
    }
  }
  return !asc_order ? list.reverse() : list ;
}

function dateSort (list , asc_order, object_props) {
  for(let i = 0 ; i < list.length ; i++ ){
    for(let j = i ; j < list.length ; j++){
      let temp = null;
      if(new Date(selectObjectProp(list[j], object_props)) < new Date(selectObjectProp(list[i], object_props))){
        temp = list[j];
        list[j] = list[i];
        list[i] = temp;
      }
    }
  }
  return !asc_order ? list.reverse() : list ;
}

function selectObjectProp(objectValue , props) {
  if(!props)
    return objectValue;
  let count = 0;
  while (props[count]){
    objectValue = objectValue[props[count++]];
  }
  return objectValue;
}