---
title: "Visual Commands"
permalink: /ru/docs/commands/
excerpt: ""
last_modified_at: 2021-09-28
toc: true
---
Visual commands can be used to specify additional information on how to embroider your design. They can be used e.g. to tell the machine to trim the thread after finishing a specific embroidery element or when to pause and where to stop, so you can add a fabric layer to your appliqué design more conventiently.

Not every embroidery machine will be able to read and process the information given by some of these commands. If this is not working for you, read your machines manual to verify your machines capabilities.
{: .notice--warning }

## Attach visual commands to objects

* Select one ore more objects
* Run `Extensions > Ink/Stitch  > Commands > Attach commands ...`
* Enable desired commands and apply
* Start/Stop/Cut commands: The connector's endpoint nearest to the object is the point at which the effect will be performed.

In `Extensions > Ink/Stitch  > Commands` you will find three options: add commands, add layer commands and attach commands.

## Add Commands ...

These commands effect the entire embroidery design.

### ![stop position](/assets/images/docs/visual-commands-stop-position.jpg) Stop position

The embroidery machine jumps to this point before every stop command. This allows for pushing the embroidery frame out toward the user to make applique steps easier.

### ![origin](/assets/images/docs/visual-commands-origin.jpg) Origin

Specifies the origin (0,0) point for embroidery files. Setting up origins is especially useful for people that have full access to the entire sewing field that their machine is capable of regardless of what hoop they use.

## Add Layer Commands ...

These commands will be added to the currently selected layer.

### ![ignore layer symbol](/assets/images/docs/visual-commands-ignore-layer.jpg) Ignore layer

All objects in this layer will not be exported to embroidery files. A common usage of this command would be in tutorial files where you want Ink/Stitch not to render explainatory text.

## Attach Commands to Selected Objects ...

These commands will be attached to the currently selected objects.

### ![starting point symbol](/assets/images/docs/visual-commands-start.jpg) ![ending point symbol](/assets/images/docs/visual-commands-end.jpg) Fill Stitch Starting/Ending Position

Defines the (1) starting or (2) ending point of an fill stitch area.

### ![trim symbol](/assets/images/docs/visual-commands-trim.jpg) Trim

"Trim after" tells the embroidery machine to cut the thread after the assigned object has been stitched.  Not all home machines support the trim function within a color block.  Mainly used to prevent long jump stitched between embroidery objects and to avoid post embroidery trimming by the operator.

### ![stop symbol](/assets/images/docs/visual-commands-stop.jpg) Stop

Commercial embroidery machines that have multiple needles normally proceed from one color to the next without pausing in between. Sometimes you *want* a pause (e.g. to trim applique fabric), so "STOP after" adds an extra color change which can be assigned to a special stop instruction using the machine's user interface (e.g. C00 on Barudan machines). Common uses for this would be to apply puff foam after doing regular embroidery.  Applying applique fabric and/or even wanting to slow down the machine at a certain spot for certain types of embroidery without having to babysit the machine.

### ![ignore symbol](/assets/images/docs/visual-commands-ignore.jpg) Ignore object

Objects with this command will be excluded from the stitch plan output.

### ![satin cut point symbol](/assets/images/docs/visual-commands-satin-cut-point.jpg) Satin cut point

Split a Satin Column at the point specified by this command. After attaching run "[Cut Satin Column](/docs/satin-tools/#cut-satin-column)".

###  ![auto route satin starting position symbol](/assets/images/docs/visual-commands-auto-route-satin-stitch-start.jpg) ![auto route satin ending position symbol](/assets/images/docs/visual-commands-auto-route-satin-stitch-end.jpg) Starting/Ending Position for Auto Route Satin

Defines the (1) starting or (2) ending point for satin auto route columns. Run "[Auto-route Satin Column...](/docs/satin-tools/#auto-route-satin-columns)" afterwards.
Use only one starting and one ending point per auto-route operation.
