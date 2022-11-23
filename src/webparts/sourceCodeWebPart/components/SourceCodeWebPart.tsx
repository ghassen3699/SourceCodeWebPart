import * as React from 'react';
import styles from './SourceCodeWebPart.module.scss';
import { ISourceCodeWebPartProps } from './ISourceCodeWebPartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
import { MonacoEditor } from "@pnp/spfx-controls-react/lib/MonacoEditor";


export default class SourceCodeWebPart extends React.Component<ISourceCodeWebPartProps, {}> {
  

  // open webpart property pane if one of data doesn't exist
  private _onConfigure = () => {
    // Context of the web part
    this.props.context.propertyPane.open();
  };


  public render(): React.ReactElement<ISourceCodeWebPartProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
      context
    } = this.props;




    return (
      // <Placeholder iconName='Edit'
      //     iconText='Configurer votre web part'
      //     description="S'il vous plais configurer votre web part."
      //     buttonLabel='Configurer'
      //     onConfigure={this._onConfigure}
      //   />

      <MonacoEditor value={''}
               showMiniMap={true}
               language={"javascript"}/>
    );
  }
}
