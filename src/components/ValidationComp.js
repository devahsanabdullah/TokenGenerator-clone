
import * as yup from 'yup';
import moment from 'moment-timezone';

const min=moment.utc(new Date).format("YYYY-MM-DD")

export const ValdationComp=yup.object({
    tokenName:yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets ").required("The token name field is required"),
    tokenSymbol:yup.string().required("The token symbol field is required"),
    mintingSupport:yup.boolean(),
    initialSupply:yup.number().positive().required("Required Initial Supply Number"),
    maximumSupply:yup.number().when("mintingSupport",{is: true,
        then: yup.number().positive().min(yup.ref('initialSupply'),"Equal than nitialSupply").required(),
        otherwise: yup.number(),}).required("Required Number"),
        

        tge: yup.array().of(
            yup.object().shape({
                date:yup.date().required("Date Reuired"),
                vesting:yup.number().min(1,null).positive("Positive Number").typeError("Number").required("Price?")
            
        
        
            }))
    
    


})



