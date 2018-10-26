import moment from 'moment'

const dateFmt = 'YYYY-MM-DD'

export function getKeepRemain(keepExpiresTime){
  const today = moment(moment().format(dateFmt), dateFmt)
  const exTime = !keepExpiresTime || /^0001/.test(keepExpiresTime) ?
    today : moment(keepExpiresTime, dateFmt)
  return keepExpiresTime ? Math.round((exTime.toDate().getTime() - today.toDate().getTime())/3600000/24) : 0
}

export function isSchoolVisitable(rec, sellerId){
  if(!rec.keepSellerId || rec.keepSellerId == sellerId) return true
  if(!rec.products) return false
  if(rec.products.find(p => p.sellerId == sellerId)) return true
  return false
}

export function isProductVisitable(rec, sellerId){
  if(rec.sellerId != sellerId){
    const {status, buffDays, isHave, isKeep, limitStage} = rec
    if(isKeep) return false
    if(buffDays) return false
    if(isHave==2) return false
    if(status==4 || status==6 || status==-2) return false
    if(limitStage == 1) return false
  }
  return true
}

export function isExperiencable(productData, sellerId){
  const isBefore = moment().isBefore(productData.beginTime)
  return (sellerId == productData.sellerId || "service"==sellerId)
    && /^(1|6|8|20)$/.test(productData.productId)
    && productData.status == 6
    && !isBefore
}
export function isExtensionable(productData, sellerId){
  const remainEndDay = moment(moment().format('YYYY-MM-DD'),'YYYY-MM-DD').diff(moment(productData.endTime),'days')
  return  (sellerId == productData.sellerId || "service" == sellerId)
    && (productData.status==6||productData.status==-5)
    && /^(1|6|8|20)$/.test(productData.productId)
    && Math.abs(remainEndDay) <= 30
}
