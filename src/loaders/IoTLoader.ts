import {MicroframeworkLoader, MicroframeworkSettings} from 'microframework'
import {useContainer as routingUseContainer} from 'routing-controllers'
import {Container} from 'typedi'

const IoTLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    routingUseContainer(Container)
}

export default IoTLoader