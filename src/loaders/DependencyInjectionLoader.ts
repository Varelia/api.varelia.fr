import {MicroframeworkLoader, MicroframeworkSettings} from 'microframework'
import {useContainer as routingUseContainer} from 'routing-controllers'
import {Container} from 'typedi'

const DependencyInjectionLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    routingUseContainer(Container)
}

export default DependencyInjectionLoader