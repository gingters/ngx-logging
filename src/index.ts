import {NgModule, ModuleWithProviders} from '@angular/core';
import {LoggingService} from './logging.service';

export interface Sink {}

export interface LoggingModuleConfig {
    sinks?: Sink[]
}

@NgModule({
    declarations: [],
    exports: [LoggingService],
})
export class LoggingModule {
    public static forRoot(config: LoggingModuleConfig = {}): ModuleWithProviders {
        return {
            ngModule: LoggingModule,
            providers: [
                LoggingService
            ]
        }
    }
}
