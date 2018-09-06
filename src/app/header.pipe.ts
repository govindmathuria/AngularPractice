import {Pipe} from '@angular/core'
@Pipe({
    name:'headerPipe'
})
export class HeaderPipe{
    transform(input){
        return 'Welcome to '+input+'! Please follow this schedule regularly.'
    }
}
