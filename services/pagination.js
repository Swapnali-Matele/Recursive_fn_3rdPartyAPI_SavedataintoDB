function pgination(offsetIN){
    if(offsetIN>1000){
        return;
    }
    else{
        pagination(offsetIN + 1);
    }
}

module.exports = pagination;